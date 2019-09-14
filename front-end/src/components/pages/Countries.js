import React from 'react'
import {Link} from 'react-router-dom'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';
import { Spinner, AnimatedCountryCard } from '../styled-components/elements';
import {useSpring, useSprings} from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap,faSortAlphaDown,faLanguage } from '@fortawesome/free-solid-svg-icons'

const CountriesPage = () => {
    const {loading,data} = useQuery(FETCH_COUNTRIES_QUERY)
    const {x} = useSpring({
        x: loading ? 100:0,
        config:{
           friction:50,
           mass:1,
           delay:3000

        }
      });

  
      
console.log(data)
    return(
<div>

{
    loading?(
        <Spinner />
    ) :(
        <div>
        {data.countries && data.countries.map(country => (
            <AnimatedCountryCard style={{transform:x.interpolate(x=>`translate3d(${x}%,0,0)`)}} key={country.id}>
           
            <header>
            <span><FontAwesomeIcon icon={faMap}/>{country.continent.name}</span>
            <span className="center">ScoutBase</span>
            <span><FontAwesomeIcon icon={faSortAlphaDown} />{country.code}</span>
            </header>
      
        <div className="announcement"   >
      
<Link to={`/countries/${country.code}`} ><h1>{country.name}</h1></Link>
<h3><FontAwesomeIcon icon={faLanguage}/></h3>
{country.languages && country.languages.map(languages => (
    <>
<p>{languages.name}</p>

<p>{languages.native}</p>

  
  </>
)
)
}
</div> 
</AnimatedCountryCard>

        )
        )
        }
        </div>
    )
}
</div>
    )
}


const FETCH_COUNTRIES_QUERY=gql`
{
    countries{
 name
 code
 languages{
      name
      native
      
    }
    continent{
      name
    }
  }
}
`

export default CountriesPage
