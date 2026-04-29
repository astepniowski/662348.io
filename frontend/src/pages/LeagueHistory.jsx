import { useEffect, useState } from "react"
import LeagueMatchList from "../components/LeagueMatchHistory/LeagueMatchList"
import { Link } from "react-router-dom";

import '../styles/LeagueHistory.css'

function LeagueHistory() {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const res = await fetch(
                    "http://localhost:8000/api/riot/matches/evoms/iwnl"
                );

                const data = await res.json();
                setMatches(data);
            } 
            catch (err) {
                console.error('error fetching matches: ', err);
            }
            finally {
                setLoading(false);
            }
        };

        fetchMatches();
    }, [])

    if(loading) return <h3 className="loading-matches">loading recent matches...</h3>;

    return (
        <div>
            <Link to="/" className="redirect-home">home</Link>

            <LeagueMatchList matches = {matches} />
        </div>
    )
}

export default LeagueHistory