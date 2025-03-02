import React from 'react';

const Quotes = () => {
    return (
        <div className='d-flex justify-content-center align-items-center bg-light-brown' style={{height:"auto"}}>
            <div className="card bg-low-brown w-100 mx-5">
                <div class="card-header">
                    Quote
                </div>
                <div class="card-body bg-midle-brown">
                    <blockquote class="blockquote mb-0">
                        <p>Steganography is the art of hiding information in plain sight, disguising messages within images, audio, or text so that only those who know where to look can find them. While cryptography scrambles data to make it unreadable without a key, steganography conceals the very existence of the message itself, allowing secrets to be exchanged unnoticed by prying eyes</p>
                        <footer class="blockquote-footer">Result promt of <cite title="Source Title">Chat Gpt <i class="fa fa-get-pocket" aria-hidden="true"></i></cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}

export default Quotes;
