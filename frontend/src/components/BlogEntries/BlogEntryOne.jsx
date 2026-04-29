import { Link } from "react-router-dom";
import star from '/star.gif'

function BlogEntryOne() {
    return (
        <div className = ".blog-entry-list-container">
            <h3>4/29/26 10:32am</h3>

            <br/>
            
            <p>
            This page is intended to document changes to the site, as well as provide additional insight into the design choices i've made during the development process
            </p>

            <br/>

            <p>Within the <Link to="/gallery">gallery</Link> page, you will find a collection of images and audio that I find particularly relevant and influential. Each image is interactable, and an embedded audio player exists that works in tandem with the inspector to enhance the viewing experience of select entries.</p>

            <p><i className="highlight">“The self is not one, but many.” — modern psychological interpretation of inner duality</i></p>

            <br/>

            <p>The <Link to="/league-history">league-history</Link> page pulls live data from the LoL API, and uses a custom wrapper to retrieve and display relevant information to the user.</p>
            <p>Currently, it's reliant on a timed access token that requires manual refresh. Once granted a permanant access token, the stability of this page will be greatly improved. Until then, this page mostly exists as a proof-of-concept and will break unless constantly updated.</p>
            <p>Further updates and support for this component is out of my hands as of this entry, but I hope to enhance functionality and provide further support in the future</p>

            <br/>
            
            <p>Within the home page exists a subdirectory that implements an email server on the backend to effortlessly <Link to="/contact">contact</Link> me directly. If you find it, feel free to contact me about anything and I will make it a priority to respond expediently.</p>

            <br/>
            

            <p>The <Link to="/readme">.README</Link> provides direct access to a respository that contains the source code of this website. If you're at all interested in how anything works, all the tools for self discovery are provided to you - in this way, your learning and understanding of the site content is limited only by your motivations and willingness to explore</p>

            <br/>

            <p>Finally, I thank you for taking the time to visit my page and read this inital post. </p>
            <p>Hopefully something that I've provided here captivates your interest, or otherwise inspires you in some way.</p>

            <br/>

            <img src={star} className="star-spin"/>

            <br/>

            <h3>Added</h3>
            <p>/*</p>
            <p>/gallery</p>
            <p>/README.txt</p>
            <p>/league-history</p>
            <p>/blog</p>

            <h3>Changed</h3>
            <p>~</p>

            <h3>Removed</h3>
            <p>~</p>
        </div>
    )
}

export default BlogEntryOne;