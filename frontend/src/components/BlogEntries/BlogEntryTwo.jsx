import { Link } from "react-router-dom";

function BlogEntryTwo() {
    return (
        <div className="blog-entry-item">
            <h2>4/30/26 4:26pm</h2>
            
            <br/>

            <p>The site is now live at <a href="https://662348.org/">https://662348.org/</a></p>

            <br/>

            <h3>Current site architecture (subject to change):</h3>

            <p>Frontend uses an AWS s3 container to store and serve our static web code. We use AWS CloudFront in order to implement caching to our container which improves load times, and reduces request strain</p>

            <br/>

            <p>All DNS services are provided through AWS Route 53</p>

            <br/>

            <p>My backend code is running on an ec2 ubuntu instance, which implements Nginx as a reverse proxy. This allows a disconnect between the client and the server meaning we can translate public https:// calls to my api, and convert them into plain http:// requests the server can handle internally.</p>

            <br/>

            <h3>misc.</h3>

            <p><Link to='/league-history'>league-history</Link> has recieved its aforementioned permanant API key, and should be fully functional. I would like to expand upon its features soon, and make it more interesting overall.</p>

            <br/>

            <h3>Added</h3>
            <p>~</p>

            <h3>Changed</h3>
            <p>/league-history</p>

            <h3>Removed</h3>
            <p>~</p>
        </div>
    )
}

export default BlogEntryTwo;