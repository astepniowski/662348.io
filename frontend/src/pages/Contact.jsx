import { useState } from "react";
import '../styles/ContactForm.css'
import { Link } from "react-router-dom";
import { API_URL } from "../config";

function Contact() {
    const [form, setForm] = useState({
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("idle")

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch(`${API_URL}/api/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

            if (res.ok) {
                setStatus("sent");
            } 
            else if (res.status === 422) {
                setStatus("invalid-email");
            } 
            else {
                setStatus("error");
            }
        }
        catch (err) {
            setStatus("error");
        }
    }

    return (
        <div>
            <Link to="/" className="redirect-home">home</Link>

            <form onSubmit={handleSubmit}
                className="form-wrapper"
            >
                <input
                    name="email"
                    placeholder="your email"
                    value={form.email}
                    onChange={handleChange}
                />

                <textarea className = "form-textbox"
                    name="message"
                    placeholder="something..."
                    value={form.message}
                    onChange={handleChange}
                />

                <button type="submit">
                    {status === "sending" ? "Sending..." : "Send"}
                </button>
            </form>

            {status === "invalid-email" && (
                <p className="error">Please enter a valid email address.</p>
            )}

        </div>
    )
}

export default Contact;