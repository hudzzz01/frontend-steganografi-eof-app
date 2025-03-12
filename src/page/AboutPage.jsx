import spaceImage from '../assets/space.svg';

export default function AboutPage(){

    return(
        <div className="bg-light-brown">
            <div className='bg-semi-brown pt-5 px-3' style={{ height: "auto", }}>
            <div className="card bg-low-brown color-dark-brown">
                <h5 className="card-header  bg-midle-brown color-dark-brown">Created By Hudzaifah</h5>
                <div className="card-body">
                    <h5 className="card-title"><a href="https://www.linkedin.com/in/muhamad-hudzaifah-assyahid-935379290" className="text-decoration-none color-dark-brown">If u wanna know about me   <p className="mt-2 text-decoration-underline color-dark-brown" > klcik me </p></a></h5>
                    <p className="card-text">hudzaifahzzzzzz@gmail.com</p>
                    <a href="https://wa.me/62895366975992" className="btn btn-success"><i class="bi bi-telephone-x"></i>  Whatsapp me</a>
                </div>
            </div>
            <div className='mt-3'>
                <img className='mt-0 mb-2 around' style={{ width: "100%" }} src={spaceImage} alt="Maskot" />
            </div>
        </div>
        </div>
    )
}