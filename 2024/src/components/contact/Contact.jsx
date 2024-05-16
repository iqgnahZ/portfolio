import './contact.css'

const Contact = () => {
  return (
    <div className="contact-form">
      <form action="">
        <div className="form-group">
          <input type="text" name="text" placeholder='UserName' id="" />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder='Email' id="" />
        </div>
        <div className="form-group">
          <input type="number" name="telephone" placeholder='Telephone' id="" />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="Message" id="" cols={30} rows={10}></textarea>
        </div>
        <button type="submit" className='button'>Submit</button>
      </form>
    </div>
  )
}

export default Contact