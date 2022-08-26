
import React from 'react'
import Table from 'react-bootstrap/Table'


function CustomTable(props){

return(
    <Table striped bordered>
        <thead>
            <tr>

                {props.heads.map((head) => 
                    <th>{head}</th>
                )}
            </tr>
        </thead>
        <tbody>
            {props.items.map((item) => 
                <>
                    <tr>
                        {props.attributes.map((attribute) => 
                            <td>{item[attribute]}</td>
                        )}
                    </tr>
                </>   
            )}
        </tbody>
    </Table>
)   
    
}

export default CustomTable;