const ContactUs = () => {
    return (
        <div >
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className='container'>
      <h2>Plant Based Cakes </h2>
      </div>
      <div className='container'>
<p className='contact-us'>
  496 Gilbert Ave York,<br/> ON M6E 4X5<br/>
  info@plantcakes.ca <br/>Mon-Fri | 8am to 4pm EST <br/>
  647-546-1286
</p>
</div>
            <div className="container " >
        <h2>Contact Us</h2>
            </div> 
        <form>
        <input  type="text" placeholder="Name..."></input>
        <input   type="email" placeholder="Email..."></input>
        <input  type="number" placeholder="Phone number"></input>
        <input className="message " type="text" placeholder="Message"></input>  
        
        <button className="submit">Send</button>
        </form>

    </div>
        
    )
}
export default ContactUs;