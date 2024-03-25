import { useState } from 'react'
import '../styles/app.css'
import profileImg from '../assets/profile.jpg'


export default function App() {

    const [generalData, setGeneralData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',        
    });

    const [educationData, setEducationData] = useState({
        collegeName: '',
        degree: '',
        collegeStart: '',
        collegeEnd: '',
    });

    const [practicalData, setPracticalData] = useState({
        companyName: '',
        position: '',
        companyStart: '',
        companyEnd: '',
    });

    function handleFormSubmit(e, setData) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        setData(data)
    }

    function handleToggle(e) {
        e.target.parentNode.nextElementSibling.classList.toggle('hidden')
    }
    
    return (
        <div className="container">
            <div className="inputSection">
                <h2>Welcome to CV generator</h2>
                <h4>Add your info in the fields below and it will be dynamically added to the template which you can see on the right.</h4>
                <div className="generalForm">  
                    <div className="header">
                        <h4>General info</h4>
                        <a onClick={handleToggle}>▼</a>
                    </div>
                    <form onSubmit={(e) => handleFormSubmit(e, setGeneralData)} className='hidden'>
                        <input name='name' type="text" placeholder='Your first name and last name...'/>
                        <input name='email' type="email" placeholder='E-mail...'/>
                        <input name='phone' type="text" placeholder='Phone...'/>
                        <input name='address' type="text" placeholder='City, Region...'/>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className="educationForm">  
                    <div className="header">
                        <h4>Education info</h4>
                        <a onClick={handleToggle}>▼</a>
                    </div>
                    <form onSubmit={(e) => handleFormSubmit(e, setEducationData)} className='hidden'>
                        <input name='collegeName' type="text" placeholder='College name...'/>
                        <input name='degree' type="text" placeholder='Your degree...'/>
                        <div className="date">
                            <div className="startDate">
                                <p>Start date:</p>
                                <input name='collegeStart' type="date"/>
                            </div>
                            <div className="endDate">
                                <p>End date:</p>
                                <input name='collegeEnd' type="date"/>
                            </div>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className="practicalForm">  
                    <div className="header">
                        <h4>Practical info</h4>
                        <a onClick={handleToggle}>▼</a>
                    </div>
                    <form onSubmit={(e) => handleFormSubmit(e, setPracticalData)} className='hidden'>
                        <input name='companyName' type="text" placeholder='Name of the company...'/>
                        <input name='position' type="text" placeholder='Position in company...'/>
                        <div className="date">
                            <div className="startDate">
                                <p>Start date:</p>
                                <input name='companyStart' type="date" placeholder='Start date...'/>
                            </div>
                            <div className="endDate">
                                <p>End date:</p>
                                <input name='companyEnd' type="date" placeholder='End date...'/>
                            </div>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <p className='contact'>© Visit me on GitHub    <a href="https://github.com/milosPavla"><img src={profileImg}  /></a></p>
            </div>
            <div className="outputSection">
                
                <h2>#YourTemplate</h2>
                <div className="generalInfo">
                    <div className="header">
                        <h4><i>General info</i></h4>
                        <a onClick={handleToggle}>▼</a>
                    </div>
                    <ul>
                        {Object.entries(generalData).map(([key, value]) => (
                            <li key={key}> #<i>{key}:</i> <strong>{value}</strong></li>
                        ))}
                    </ul>  
                    <button className='btnReset' onClick={(e) => (e.preventDefault(), setGeneralData({name: '', email: '',phone: '',address: ''}))}>Reset</button> 
                </div>
                <div className="educationInfo">
                <div className="header">
                        <h4><i>Education info</i></h4>
                        <a onClick={handleToggle}>▼</a>
                    </div>
                    <ul>
                        {Object.entries(educationData).map(([key, value]) => (
                            <li key={key}> #<i>{key}:</i> <strong>{value}</strong></li>
                        ))}
                    </ul>   
                    <button className='btnReset' onClick={(e) => (e.preventDefault(), setEducationData({collegeName: '',degree: '',collegeStart: '',collegeEnd: '',}))}>Reset</button>   
                </div>
                <div className="practicalInfo">
                <div className="header">
                        <h4><i>Practical info</i></h4>
                        <a onClick={handleToggle}>▼</a>
                    </div>
                    <ul>
                        {Object.entries(practicalData).map(([key, value]) => (
                            <li key={key}> #<i>{key}:</i> <strong>{value}</strong></li>
                        ))}
                    </ul>    
                    <button className='btnReset' onClick={(e) => (e.preventDefault(), setPracticalData({companyName: '',position: '',companyStart: '',companyEnd: '',}))}>Reset</button> 
                </div>    
                 
            </div>
        </div>
    )
}