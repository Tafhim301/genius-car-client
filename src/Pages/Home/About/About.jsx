import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen p-5">
            <div className="hero-content flex-col items-center lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg " />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-3'>
                    <h1 className="text-2xl text-orange-500 font-bold">About Us</h1>
                    <h2 className="py-6 text-5xl font-semibold">We are qualified & of experience in this field.</h2>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. 
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
                    <button className="btn btn-error text-white">Get more info</button>
                </div>
            </div>
        </div>
    );
};

export default About;