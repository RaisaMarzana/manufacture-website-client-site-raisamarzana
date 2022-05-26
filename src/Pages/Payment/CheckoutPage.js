import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const CheckoutPage = () => {
    const { _id } = useParams();
    const { register, formState: { errors, isDirty, isValid }, handleSubmit, reset } = useForm({ mode: "onChange" });
    const user = useAuthState(auth);
    const navigate = useNavigate();


    const url = `https://cryptic-everglades-66180.herokuapp.com/tools/${_id}`;

    const { data: tool, isLoading, refetch } = useQuery('tool', () => fetch(url).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    // const quantity = data.quantity;

    // const onSubmit = data => {
    //     const newQuantity = { quantity: parseInt(quantity) - parseInt(data.newQuantityValue) };
    //     const url = `https://cryptic-everglades-66180.herokuapp.com/tools/${_id}`;
    //     fetch(url, {
    //         method: "PUT",
    //         headers: {
    //             'content-type': 'application/json',
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         },
    //         body: JSON.stringify(newQuantity)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             refetch()
    //             reset()
    //         })
    // }

    const quantityReduce = (gq) => {

        const newQuantity = parseInt(tool.quantity) - parseInt(gq);

        const url = `https://cryptic-everglades-66180.herokuapp.com/tools/${_id}`;
        console.log({ newQuantity })
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ newQuantity })
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                reset()
                return
            })
    }

    const placeOrder = order => {
        fetch('https://cryptic-everglades-66180.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success(`Order is set for ${tool.name}`)
                }
                else {
                    toast.error(`Failed to set order for ${tool.name}`)
                }

                reset()
                return
            })
    }


    const min_quantity = tool.min_quantity;
    const max_quantity = tool.quantity;



    const onSubmit = (data) => {

        const gq = data.newQuantityValue
        const order = {
            name: tool.name,
            price: tool.price,
            quantity: data.newQuantityValue,
            total: (tool.price * data.newQuantityValue),
            email: (user[0].email),
            userName: (user[0].displayName),
        }
        const allData = Promise.all([placeOrder(order), quantityReduce(gq)]);
        console.log(allData)
    }

    return (
        <div className='mx-5 mb-2'>

            <div className="hero min-h-screen bg-base-100 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='grid lg:grid-cols-3'>
                        <img src={tool.image} className="sm:max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt={tool.name} />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">{tool.name}</h1>
                        <p className="py-6">{tool.about}</p>
                        <p className='mt-4 text-xl'>Available quantity: {tool.quantity} pieces</p>
                        <p><span className='text-warning text-xl'>{tool.min_quantity} pieces</span> is our minimum order limit</p>
                        <p className='text-success font-semibold '><span className='text-2xl mb-5'>${tool.price}</span> per unit price</p>
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-xs"
                            value={(user[0]?.displayName)}
                        />
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-xs"
                            value={(user[0]?.email)}
                        />
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="number"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder='Our purchase newQuantity'
                                    {...register("newQuantityValue", {
                                        required: {
                                            value: true,
                                            message: 'Order quantity is Required'
                                        },
                                        min: {
                                            value: min_quantity,
                                            message: 'You can not order less then minimum quantity'
                                        },
                                        max: {
                                            value: max_quantity,
                                            message: 'You can not order more than available quantity'
                                        }

                                    })}
                                />
                                <label className="label">
                                    {errors.newQuantityValue?.type === 'required' && <span className="label-text-alt text-error">{errors.newQuantityValue.message}</span>}
                                    {errors.newQuantityValue?.type === 'min' && <span className="label-text-alt text-error">{errors.newQuantityValue.message}</span>}
                                    {errors.newQuantityValue?.type === 'max' && <span className="label-text-alt text-error">{errors.newQuantityValue.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder='Your Address'
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Address is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-error">{errors.address.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder='Your Number'
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone Number is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-error">{errors.phone.message}</span>}
                                </label>
                            </div>
                            <input disabled={!isDirty || !isValid} className='btn btn-info mt-2 text-white' type="submit" value="Confirm Order" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;