import React from 'react';
import Columns from './fragment'

export default class Index extends React.Component {

    render() {
        return (
            <table>
                <tfoot>
                    <tr>
                        <Columns />
                    </tr>
                </tfoot>
            </table>
        );
    }
}