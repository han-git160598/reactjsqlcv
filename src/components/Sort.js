import React from 'react';


class Sort extends React.Component {
    constructor(props){
        super(props)
        this.state={
            filterData:'',
            SortData:'1'
        }
       
    }
    filterData = (e)=>{
      
        this.setState({filterData:e.target.value})
        this.props.filterData(e.target.value)

    }
    SortData = (e) =>{
        this.setState({SortData:e.target.value})
        this.props.SortData(e.target.value)
    }
	render() {
		return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                
                <div className="row">

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="input-group">
                            <span className="input-group-btn">          
                            <label htmlFor="input" className="col-sm-0 control-label">:</label>
                            <div className="col-sm-12">
                                <select onChange={this.SortData} className="form-control">
                                    <option value={1}>Sắp xếp A-Z</option>
                                    <option value={2}>Sắp xếp Z-A</option>
                                </select> 
                            </div>
                            </span>
                        </div>  
                    </div>

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="input-group">
                            <span className="input-group-btn">          
                            <label htmlFor="input" className="col-sm-0 control-label">:</label>
                            <div className="col-sm-12">
                                <select onChange={this.filterData} className="form-control">
                                    <option value={0}>Tất cả</option>
                                    <option value={1}>Kích hoạt</option>
                                    <option value={2}>Ẩn</option>
                                </select>
                            </div>
                            </span>
                        </div>
                    </div>


                </div>
                
                

                
                
            </div>  

            
		);
	}
}

export default Sort;
