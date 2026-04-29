import "../styles/Link.css";
import LinkComponent from "../components/LinkComponent";
import ContactPicture from "../components/ContactPicture";
import FileTree from "../components/FileTree/FileTree";
import '../styles/Generic.css'

const links = [
  { 
    label: "soundcloud", 
    href: "https://soundcloud.com/evoms" 
  },
  { 
    label: "steam", 
    href: "https://steamcommunity.com/id/evoms/" 
  },
  { 
    label: "ig", 
    href: "https://www.instagram.com/weedhalt" 

  },
  { 
    label: "github", 
    href: "https://github.com/astepniowski" 
  },
  { 
    label: "youtube", 
    href: "https://www.youtube.com/@notevoms"
  }
];

function Home() {
  return (
    <>
      <div className="links-flexbox">
        {links.map((link) => (
          <LinkComponent
            key={link.href}
            className="social-link"
            href={link.href}
          >
            {link.label}
          </LinkComponent>
        ))}
      </div>

      <ContactPicture
        defaultSrc="/head.gif"
        hoverSrc="/heartbeat.gif"
      />

      <FileTree />
    </>
  );
}

export default Home;