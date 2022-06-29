import React from 'react';
import styles, {card_container, image, title} from './styles/Card.module.css'

const Card = ({ id, name, genres, img }) => {
    return (
        <div className={card_container}>
            <img className={image} src={img || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAtFBMVEX/pULnWhAAAAD////plzz/qUX/qkT/p0PsXBBgPhnmVw3pYRbucyP/rEWFViKlayswHwwtEgNZIwbOhTWkQAuJNQnlSADyfiqzdC6WOgrweCf1iDF0Sx7zgy7qeE3nVwDTUg9qKQevRAz4kjfCfjKVYCcMCAMoGgpQNBVJLxMmDwMdCwKdOwjdbiO8VBduSx/2YBGbUBvefC27SQ2JWCPRYBvDZCGPTxzTbybZjDjeXRV8MAkag2v7AAAEFklEQVR4nO2da1PTQBSG29hk20IsyqVIi1JBQLzgBS/o//9f8sEZ9mTYnc1mkz3n9H1m8IvS7tPnOJNbk9EzytFYPG9eE6MRDOUBw9zr6w4Mc6+vOzDMvb7uwDD3+roDw9zr6w4Mc6+vO03DI0pdiqeaFDajxgdQjeTjNyxzLy8BaCifbTfUP6X6DTGlEkBD+bRoWFNyrfgJDF0Z7RJuWL/fs7kcVsKHmVzaK7taE8UWhlcF/bd8oBLFrHb/pe//Yb2n0ZA0VGmIhkyA4VZPqX5DTCkT0BAN/7MFhpfBhokOyMcaXkdOaTjl7nzcnflJmiMMrQzN45+Gn6GxfoIN4z5FwQ0VGupvqN9Q/5TqN8SUyjdEQ/mG+huGv4e9T1A3DKfhEEN6vZJvSzjeMHhKyx0b+iLTzc2LMD4c2Ipj8po7y0jFZIbuwZy+LEKhhnRol5FDm2hKy50nl8XfsEVDoYb6G+o3xJTKN9TfUL8hplS+4dANP/oM68oifCN1eMPFvptPnq3bz7dri+NgxeGndL8yLqqlx/CAvMrz4KVlMHR/+uXwhn1MKS9DNIQhf0NMqXxD/Q31G2JK5Rvqb6jfEFMq31B/Q/2G+qdUvyGmVL6h/ob6DfVPqX5DTOnj2sZzC3qd0xePoaF3PGLccHRu83VDuHEamtUuwTcJmRs+LPaRel14IIanc4JbMH9Dm6qNoUcKhikM404sw5CTIaZUvqH+hvoN9U+pfsPIKb31GlrX01QNQ98XFTg1NBcLD99OLeg3M6bfX7nZMGrY2Cei1Lvube3poS8+o4ZefF8ZymDYwx3pYDiwof4p1W+IKZVviIbyDdFQviEayjfM2nB27MFzBquVYdaGd7XzqycPBL8h44bhg+hl2w2zTikMA8GUJoeZIRpGwMwQDSNgZthPQ/fFRSoamtWJxY+3hM3ghn08hcU+qVEvCjdSGxLK7IZ9NLTJb4iGXclviIZdyW+Ihl3Jb4iGXclviIZdyW/YS0P7tknZDftoeL6y+HlI+PXO4iL2vrqUHPv4zh3g6apKcOPgBqyO08xXiaxsWB2nyWCIhhEwM0TDCJgZomEEzAzRMAJmhmgYgd+wirpkxguvhr8vLO7l7ls4DdWcP+RkiIYRMDNEwwiYGaJhBMwM0TACZoZoGMEAhnR7NryhmVBiDZf24+L+nBH+Rho2lkYUwxu2ePK4XzH9NVFUotWTx/t+enyis2sNwzZPjycNVRqioXxDNJRviIbyDdFQviEayjckDa80GtrvUa1nNtcpDM3x9czJItTQTOir3JEd9xb7+FVNSGE4MrWb8AMMxveLea9NHIK815cOARrKBw3lg4byQUP5bHtDBYamYUhPlJxNFHBPDQvtwFA+MJQPDOUDQ/nAUD4wlM8/hvIHgVMf4HYAAAAASUVORK5CYII='}/>
            <div className={title}><p>{name}</p></div>
            {/* {
                genres?.map(e => (
                    <p>{e.name}</p>
                ))
            } */}
        </div>
    );
}

export default Card;