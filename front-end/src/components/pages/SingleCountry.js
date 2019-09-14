import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';
import { AnimatedCountryCard,Spinner } from '../styled-components/elements';
import { useSpring } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill,faPhone } from '@fortawesome/free-solid-svg-icons'


const SingleCountryPage = (props) => {
    const code = props.match.params.code
    const {loading,data} = useQuery(FETCH_COUNTRY,{
        variables:{
            code
        }
      })
   
      const {x} = useSpring({
        x: loading ? 0:1,
      
      });

         let markup;
       if(loading){markup=<Spinner />}else{
        if(!data.country){
            markup= <p>Error..</p>
          }else{
        
            markup=(
              
<AnimatedCountryCard style={{opacity:x}}>
<header>
            <span><FontAwesomeIcon icon={faPhone}/>{data.country.phone}</span>
            <span className="center">ScoutBase</span>
            <span><FontAwesomeIcon icon={faMoneyBill}/>{data.country.currency}</span>
            </header>
      
        <div className="announcement"   >
      
<h1>{data.country.name}</h1>
</div>
</AnimatedCountryCard>

                
            )
          }}
          return markup;
   }

const FETCH_COUNTRY = gql`

     query($code:String!){
        country(code:$code){
            
        name
        phone
        currency

    }

}

`

export default SingleCountryPage
{/*    <h1>{data.country.name}</h1>
                   <p>{data.country.currency}</p>
                   <p>{data.country.phone}</p>

               
                </div>
                </div>*/ }