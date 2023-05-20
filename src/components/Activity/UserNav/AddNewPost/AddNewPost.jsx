import React from "react";
import arrowTop from './../../../../img/arrowTop.svg'
import Style from './AddNewPost.module.css'

const AddNewPost = (props) => {
    return (
        <div className={`${Style.addNewPost} ${Style.userNavItem}`}>
            <div className={Style.navigationName}>
                <p>Share your thoughts</p>
                <img src={arrowTop} alt="Arrow top"></img>
            </div>
            <form className={Style.thoughtsForm}>
                <textarea rows="4" placeholder="Enter your message..."></textarea>
                <button className={Style.buttonSave} type="submit">Save</button>
            </form>
        </div>
    );
};

export default AddNewPost;
