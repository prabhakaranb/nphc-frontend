import React, { Component } from 'react';
import axios from 'axios';

const EMPLOYEE_UPLOAD_API_URL = 'http://localhost:3005/employees/upload';

export default class FilesUploadComponent extends Component {
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            csv: ''
        }
    }

    onFileChange(e) {
        this.setState({ csv: e.target.files[0] })
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('csv', this.state.csv)
        axios.post(EMPLOYEE_UPLOAD_API_URL, formData, {
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.error(err)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <h2>Employee Salary Upload</h2>
                        <div className="form-group">
                            <input type="file" accept=".csv" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}