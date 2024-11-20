"use client";
import { useState } from "react";
import styles from "./Feedback.module.css"
import { v4 as uuidv4 } from 'uuid';

function FeedbackForm({ relatedBlogId }) {
    const [formData, setFormData] = useState({
        comment: "",
        username: "",
        email: "",
        relatedBlogId: "NA",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        relatedBlogId && (formData.relatedBlogId = relatedBlogId);
        try {
            var newFeedback = formData;
            newFeedback["feedback_id"] = uuidv4();

            let now = new Date();
            let istTime = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
            let istTimestamp = istTime.toISOString().slice(0, 19).replace('T', ' ');
            newFeedback["timestamp"] = istTimestamp;
            alert("Feedback submitted successfully");
            setFormData({
                comment: "",
                username: "",
                email: "",
                relatedBlogId: "NA"
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.heading}>Leave a Comment</div>
            <div>
                <label htmlFor="name">Full Name <span style={{ color: "red" }}>*</span></label><br />
                <input value={formData.username} name="username" placeholder="enter full name" onChange={(e) => handleChange(e)} type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="email">Email <span style={{ color: "red" }}>*</span></label><br />
                <input value={formData.email} name="email" placeholder="example@domain.com" onChange={(e) => handleChange(e)} type="email" id="email" required />
            </div>
            <div>
                <label htmlFor="comment">Comment <span style={{ color: "red" }}>*</span></label><br />
                <textarea value={formData.comment} placeholder="Type your message" name="comment" onChange={(e) => handleChange(e)} id="comment" rows="6" cols="70" />
            </div>
            <div>
                <button className={styles.submitButton}>Submit Comment</button>
            </div>
        </form>
    )
}

export default FeedbackForm;