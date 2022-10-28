import React from "react";
import { Link } from "react-router-dom";


const ItemCard = ({ id, name, price }) => {

    return (
        <Link to={`item/${id}`}>
            <div >
            <div class="card w-96 bg-base-100 shadow-xl w-4/5">
                <figure class="px-10 pt-10">
                    <img
                        src="https://placeimg.com/400/225/arch"
                        alt="Shoes"
                        class="rounded-xl"
                    />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now ${price}</button>
                    </div>
                </div>
            </div>
            </div>
            
            {/* <div className='m-5'>
        <div>{id}</div>
        <div>{name}</div>
        <div>{price}</div>
    </div> */}
        </Link>
    );
};

export default ItemCard;
