import React,{useState} from 'react'
import "./Faq.css";
import image from "../../constant/image";
import Nextlevel from "../../components/Nextlevel"


function Faq() {
    const [selected , setSelected] = useState(null)
     
    const toggle= (i)=>{
        if(selected==i){
            return setSelected(null)
        }else{
            setSelected(i)
        }


    }

    const data= [
        {question:"What is Histudy? How does it work?",
        answer:"Education HTML Template - Histudy is made for Education Website, Course School, Courses Hub, College, Academy, University, School, Kindergarten, Online School, Classic Lms, University Status, Instructor Portfolio, Language Academy, Gym Coaching, Online Course, Single Course, Marketplace, University Classic, Home Elegant, Home Technology etc."
    },
    {
        question:"How can I get the customer support?",
        answer:"After purchasing the product need you any support you can share with us with create support ticket here: Support Center Our support team will contact with you soon"
    },
    {
        question:"Can I get update regularly and For how long do I get updates?",
        answer:"Yes, We will get update the Histudy. And you can get it any time. Next time we will comes with more feature. You can be get update for unlimited times. Our dedicated team works for update."
    },
    {
        question:"Can I change any Elements as I like?",
        answer:"Yes, You can change any Elements as you like. And By the way you can build your website which you are choose."
    },
    {
        question:"Can I build a complete project with this template?",
        answer:"Yes, Why not. You can build a project and complete website as you are like.More component are available include in this templete. And you can be use it following documentation."
    },
    {
        question:"Do you have an online documentation?",
        answer:"Yes, please go to our online documentation via click here."
    },
    {
        question:"How can I remove unwanted plugins?",
        answer:"All third-party plugin JS files are located in src/assets/js/vendor and their CSS files are in src/assets/css/vendor. Just remove unwanted vendor JS / CSS files from vendor folders and then remove unwanted functions from src/assets/js/main.js."
    },
    {
        question:"How can I remove unwanted CSS?",
        answer:"Bootstrap SCSS imports are located in src/assets/css/vendor/bootstrap.min.css` and template SCSS imports are in src/assets/scss/style.scss. Remove or comment any unwanted import and recompile."
    }
 ]
  return (
    <div className=' faq_margin'>
        <div className='faq_wrapper  '>
            <div className='text-center  '>
                <div>
                    <img className='mt-2' src={image.group_image} alt="group-image" />
                </div>
                <div className='text-center text-white my-4 faq_header'>
                    <span className=' border border-dark bg-violet rounded-4  p-2'>CHECK OUT OUR FAQ SECTION TO SEE IF WE CAN HELP.</span>
                    <h1 className='mt-3 fw-bolder color-white'> Do you have any Question</h1>
                </div>
            </div>

            <div className='accordian_wrapper'>
                <div className="accords">
                    {data.map((items,i)=>(
                        <div classname="accords-item">
                            <div className="accord-title" onClick={()=>toggle(i)}>
                                <h5>{items.question}</h5>
                                <span>{selected===i ? "-":"+"}</span>
                            </div>
                            <hr />
                            <div className={selected===i?"accord-content-show":"accord-content-hide helo"}>{items.answer}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='next_level'>
            <Nextlevel/>
        </div>
        </div>

        
    </div>
)}
export default Faq
