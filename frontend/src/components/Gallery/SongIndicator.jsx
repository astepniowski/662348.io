import play_white from '../../assets/play_white.png' 

function SongIndicator() {
    return (
        <div>
            <img 
                src ={play_white}
                className="song-indicator"
            />
        </div>
    )
}

export default SongIndicator;