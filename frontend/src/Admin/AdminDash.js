import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AdminDash = () => {
    return (
        <div class="container my-5">
            <FontAwesomeIcon icon={["fas", "home"]} />
            <section class="text-center dark-grey-text">
                <h3 class="font-weight-bold pb-2 mb-4">Our pricing plans</h3>
                <p class="text-muted w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
                    eum porro a pariatur veniam.</p>
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="mb-4">Basic plan</h5>
                                <div class="d-flex justify-content-center">
                                    <div class="card-circle d-flex justify-content-center align-items-center">
                                    
                                    </div>
                                </div>
                                <h2 class="font-weight-bold my-4">59$</h2>
                                <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa pariatur id
                                    nobis accusamus deleniti cumque hic laborum.</p>
                                <a class="btn btn-indigo btn-rounded">Buy now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card indigo">
                            <div class="card-body white-text">
                                <h5 class="mb-4">Premium plan</h5>
                                <div class="d-flex justify-content-center">
                                    <div class="card-circle d-flex justify-content-center align-items-center">
                                        <i class="fas fa-users"></i>
                                    </div>
                                </div>
                                <h2 class="font-weight-bold my-4">79$</h2>
                                <p>Esse corporis saepe laudantium velit adipisci cumque iste ratione facere non distinctio cupiditate
                                    sequi atque.</p>
                                <a class="btn btn-outline-white btn-rounded">Buy now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="mb-4">Advanced plan</h5>
                                <div class="d-flex justify-content-center">
                                    <div class="card-circle d-flex justify-content-center align-items-center">
                                        <i class="fas fa-chart-line indigo-text"></i>
                                    </div>
                                </div>
                                <h2 class="font-weight-bold my-4">99$</h2>
                                <p class="grey-text">At ab ea a molestiae corrupti numquam quo beatae minima ratione magni
                                    accusantium repellat eveniet quia vitae.</p>
                                <a class="btn btn-indigo btn-rounded">Buy now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdminDash;
