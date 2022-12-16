import React from 'react'

const Error = ({errormessage}) => {
  return (
    <div>
        <h2>Der er opstået en fejl ...</h2>
        {
            errormessage &&
            <p>{errormessage}</p>
        }


    </div>
  )
}

export default Error