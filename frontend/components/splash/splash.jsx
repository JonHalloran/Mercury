import React from 'react'

export default (props) => (
    <div className={'splash-page'}>
        <section className={'splash-words'}>
            <h2 className={'tag-line'}>RUN FAST</h2>
            <p>Try my super awesome runnig app, backed by nobody. </p>
            <button onClick={() => props.history.push('/signup/')}>SIGN UP</button>
        </section>
    </div>

)