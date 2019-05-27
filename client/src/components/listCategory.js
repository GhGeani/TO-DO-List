import React, { Component } from 'react';

class ListCategory extends Component {
    render(){
        return(
            <div className = 'container border  rounded-left rounded-right col-md-5 table-responsive categories-container '>
                    <table className = 'table table-hover text-center'>
                        <thead>
                            <tr>
                                <td className = 'display-4 text-muted text-center'>
                                    Categories
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    All TODOS
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        );
    }
}

export default ListCategory;