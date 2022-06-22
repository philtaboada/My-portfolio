import React from 'react'

const MyHabilities = () => {
    return (
        <div className='MyHabilities'>
            <a name='my-skills'></a>
            <div className='title-habilities-container'>
                <h1 className='my-habilities-title'>My Skills</h1>
            </div>
            <div className='MyHabilities-container'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className='Title-table'>% Programming Languages</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        <tr>
                            <th><span><i className="fa-brands fa-html5 fa-4x"></i></span><span className='table-text-size color-icon-table'> HTML</span> </th>
                            <td>95%</td>
                        </tr>
                        <tr>
                            <th><span><i className="fa-brands fa-css3 fa-4x"></i></span><span className='table-text-size ' > CSS</span> </th>
                            <td>80%</td>
                        </tr>
                        <tr>
                            <th><span><i className="fa-brands fa-js fa-4x"></i></span><span className='table-text-size color-icon-table'> JS</span></th>
                            <td>68%</td>
                        </tr>
                        <tr>
                            <th><span><i className="fa-brands fa-react fa-4x"></i></span><span className='table-text-size'> React JS</span></th>
                            <td>70%</td>
                        </tr>
                        <tr>
                            <th><span><i className="fa-brands fa-python fa-4x"></i></span><span className='table-text-size color-icon-table'> Python</span></th>
                            <td>75%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyHabilities