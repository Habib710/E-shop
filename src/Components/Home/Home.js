import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeftLong, faShoppingCart, faTruck} from '@fortawesome/free-solid-svg-icons'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>

            {/* Header div......... */}
            <div className="p-lg-5 d-lg-flex hear-div">
                <h3 className="">Shipping and Payment</h3>
                <div className="d-flex  align-items-center">
                    <span className="">
                        <FontAwesomeIcon className="fs-5 shiping-icon" icon={faShoppingCart}/>
                    </span>
                    <hr className="hr-css mx-3"/>
                    <span className="">
                        <FontAwesomeIcon className="fs-5 shiping-icon" icon={faTruck}/>
                    </span>
                </div>
            </div>

            {/* main section.................. */}
            <section className="px-5 row">
                {/* form div................ ........*/}

                <div className="col-lg-6">
                    {/* Login & singup div.......... */}
                    <div>
                       <Link to='/login'> <button className='btn-css'>LOGIN</button></Link>
                        <button className='btn-css mx-3'>SING UP</button>

                    </div>
                    <div>
                        <h5 className='py-5'>Shoping Information</h5>
                        {/* form.. */}

                        <div>
                            <form className='form-css'>
                                <input type="text" placeholder='Email'/>
                                <input type="text" placeholder='Adress'/>
                                <input type="text" placeholder='Fist name'/>
                                <input type="text" placeholder='City'/>
                                <input type="text" placeholder='last name'/>
                                <input type="number" placeholder='Zip'/>
                                <input type="number" placeholder='Phone number'/>
                                <input type="text" placeholder='Country'/>

                            </form>

                        </div>

                    </div>

                </div>
                {/* payment div....................... */}
                <div className="col-lg-3">
                    <div>
                        <h5 className='my-4'>Payment Method</h5>

                        <div className='div-span'>

                            <span className='img-span'><img
                                src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_640.png"
                                alt="img"/></span>
                            <span className='img-span'><img
                                src="https://cdn.mos.cms.futurecdn.net/mp8Xz7xhhhy7vHXxbS9AYo-320-80.jpg"
                                alt="img"/></span>
                            <span className='img-span'><img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ50K3f1difoSCr88OnbI7TUQ_kOiy1EHP_2oFJVoJDVd379oggw_1fI7NFPnD9ANoUCE&usqp=CAU"
                                alt="img"/></span>
                            <span className='img-span'><img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqeNRZPW_mRI39vJ2QZEe42wVhtOzk5dxuTM7d7jBC0aGBUHbhRSAPPgmLFxTyXR2WL1Q&usqp=CAU"
                                alt="img"/></span>
                            <span className='img-span'><img
                                src="https://img.favpng.com/6/20/7/jcb-co-ltd-logo-payment-credit-card-png-favpng-JwRZcDBMFsQY7W3uVSUar52Nb.jpg"
                                alt="img"/></span>
                            <span className='img-span'><img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqeNRZPW_mRI39vJ2QZEe42wVhtOzk5dxuTM7d7jBC0aGBUHbhRSAPPgmLFxTyXR2WL1Q&usqp=CAU"
                                alt="img"/></span>

                        </div>
                    </div>
                    <div className='mt-5'>
                        <h5 className='my-4'>Delivary Method</h5>

                        <div className='div-span2'>

                            <span className='img-span2 d-flex'><img
                                width="100%"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/DPD_logo_%282015%29.svg/2560px-DPD_logo_%282015%29.svg.png"
                                alt="img"/>$20.0</span>
                            <span className='img-span2 d-flex'><img
                                src="https://1000logos.net/wp-content/uploads/2021/04/Fedex-logo.png"
                                alt="img"/>$30.5</span>
                            <span className='img-span2 d-flex'><img
                                src="https://mark.trademarkia.com/logo-images/qingdao-donglu-industrial-co/dnl-87925336.jpg"
                                alt="img"/>$25.2</span>

                        </div>
                    </div>

                </div>

                {/* cart div.......................... */}
                <div className="col-lg-3 ">
                    <h5 className='my-3'>Your Cart</h5>
                    <div className='your-cart mt-3'>
                        <img
                            width="75px"
                            src="https://w7.pngwing.com/pngs/549/191/png-transparent-t-shirt-sleeve-polo-shirt-clothing-shirt-tshirt-black-top.png"
                            alt="img"/>
                        <div>
                            <h6>T-Shirt</h6>
                            <h6>slime cloths</h6>
                            <p>#.371351</p>

                        </div>
                        <h6>
                            $ 55.20
                        </h6>
                    </div>
                    <div className='your-cart mt-3 '>
                        <img
                            width="75px"
                            height="75px"
                            src="https://w7.pngwing.com/pngs/827/140/png-transparent-t-shirt-fashion-clothing-mens-fashion-tshirt-abdomen-formal-wear-thumbnail.png"
                            alt="img"/>
                        <div>
                            <h6>Men's World</h6>
                            <h6>T-shirt</h6>
                            <p>#.371351</p>

                        </div>
                        <h6>
                            $ 55.20
                        </h6>
                    </div>

                    <h6 className='cost-css text-center m-5'>Total Price : $ 150.30</h6>

                    <div className='mx-4 d-flex align-items-center justify-content-around'>
                        <FontAwesomeIcon className="fs-5 " icon={faTruck}/>
                        You Are $30.22 away for the
                        <br/>free Shiping </div>
                </div>
            </section>
            {/* last div..................... */}
            <div className=' p-5 d-lg-flex justify-content-between'>
                <h5 className='m-3'><FontAwesomeIcon className="fs-5 " icon={faArrowLeftLong}/> Back</h5>
                <div>
                    <button className='btn-css  mx-3'>CONTINUW SHOPING</button>
                    <button className='btn-css '>PROSCCEDSHOPING</button>
                </div>

            </div>
        </div>
    )
}

export default Home
