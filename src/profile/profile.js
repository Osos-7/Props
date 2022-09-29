import PropTypes from 'prop-types'

export const Info =({fullName ,bio, profession, children})=>
{
    const divStyle={width:'50%', margin:'auto', textAlign:'center', color:'#9c0c0c'};

    const imageStyle = {
        width: "250px",
        borderRadius: "10%"
    };
    
    const handleName = () => {
        alert(fullName);
    };

    return(
        <div style={divStyle}>
        <h1>{fullName}</h1>
        <h3>{bio}</h3>
        <h3>{profession}</h3>
        <img style={imageStyle} src={children} alt="Profile Photo"></img>
        <h3><a href="/" onClick={handleName}>Dosny!</a></h3>
        </div>
    )

}

Info.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.string
};

function ReactHeader({ version = "16" }) {
    return <h1>React {version} Documentation</h1>;
   }
   