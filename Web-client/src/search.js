import React, {useState } from 'react';
import useCollapse from 'react-collapsed';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./index.css";

function Section(props) {
  const config = {
      defaultExpanded: props.defaultExpanded || false,
      collapsedHeight: props.collapsedHeight || 0
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
return (
  <div className="collapsible">
      <div className="header" {...getToggleProps()}>
          <div className="title">{props.title+(isExpanded ? ' 👇🏻 ' : ' 👉🏻 ')}</div>
          <div className="icon">
              <i className={'fas fa-chevron-circle-' + (isExpanded ? 'up' : 'down')}></i>
          </div>
      </div>
      <div {...getCollapseProps()}>
          <div className="content">
              {props.children}
          </div>
      </div>
  </div>
  );
}

function Search(){
  let navigate = useNavigate();
    const today= new Date().toLocaleDateString('ko');
    const[EHRNumber,setEHRNumber]=useState("");
    const[Username,setUsername]=useState("");
    const[Userbirth,setUserbirth]=useState("");
    const[Usergender,setUsergender]=useState("");
    const[Userphone,setUserphone]=useState("");
    const[Userlocation,setUserlocation]=useState("");
    const[Ntype,setNtype]=useState("");
    const[Ndate,setNdate]=useState("");
    const[Nreview,setNreview]=useState("");
    const[Dtype,setDtype]=useState("");
    const[Ddate,setDdate]=useState("");
    const[Dreview,setDreview]=useState("");
    const[Ptype,setPtype]=useState("");
    const[Pdate,setPdate]=useState("");
    const[Plocation,setPlocation]=useState("");
    const[Preview,setPreview]=useState("");
    const[Vtype,setVtype]=useState("");
    const[Vdate,setVdate]=useState("");
    const[Vlocation,setVlocation]=useState("");
    const[Vreview,setVreview]=useState("");
    const[Vstype,setVstype]=useState("");
    const[Vsdate,setVsdate]=useState("");
    const[Vslocation,setVslocation]=useState("");
    const[Vsdoctor,setVsdoctor]=useState("");
    const[Vsreview,setVsreview]=useState("");
    const[Nstype,setNstype]=useState("");
    const[Nsdate,setNsdate]=useState("");
    const[Nslocation,setNslocation]=useState("");
    const[Nsdoctor,setNsdoctor]=useState("");
    const[Nsreview,setNsreview]=useState("");
    const[Htype,setHtype]=useState("");
    const[Hsolution,setHsolution]=useState("");
    const[Hdate,setHdate]=useState("");
    const[Hreview,setHreview]=useState("");


    const UpdateInformation= async() => {
      await axios.put(`http://203.247.240.226:8080/fhir/Patient/${EHRNumber}`,{
        "resourceType" : "Patient",
        "id" : EHRNumber,
        "meta" : {
          "profile" : [
            "https://example.org/fhir/krcore/StructureDefinition/krcore-patient"
          ]
        },
        "text" : {
          "status" : "generated",
          "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>KR Core Patient Profile Example</p>\n    </div>"
        },
        "identifier" : [
          {
            "type" : {
              "coding" : [
                {
                  "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                  "code" : "MR"
                }
              ]
            },
            "system" : "urn:oid:1.2.3.4.5.6",
            "value" : "MR12345"
          }
        ],
        "name" : [
          {
            "text" : Username,
          }
        ],
        "telecom" : [
          {
            "system" : "phone",
            "value" : Userphone,
          }
        ],
        "gender" : Usergender,
        "birthDate" : Userbirth,
        "address" : [
          {
            "extension" : [
              {
                "url" : "https://example.org/fhir/krcore/StructureDefinition/krcore-roadnameaddress",
              }
            ],
            "text" : Userlocation,
            "postalCode" : ""
          }
        ]
      },)
      
  .then((res) => {
    window.alert("Create Success");
    console.log(res);
  })
}

const SearchInformation = async () => {
    await axios.get(`http://203.247.240.226:8080/fhir/Patient/${EHRNumber}`).then((res) => {
      window.alert("Search Success");
      setUsername(res.data.name[0].text);
      setUserbirth(res.data.birthDate);
      setUsergender(res.data.gender);
      setUserphone(res.data.telecom[0].value);
      setUserlocation(res.data.address[0].text);
      console.log(res);
    });
}

const DeleteInformation = async () => {
    await axios.delete(`http://203.247.240.226:8080/fhir/Patient/${EHRNumber}`).then((res) => {  
      window.alert("Delete Success");
      navigate("/");
    });
}

    
    return(
        <div className="container container-fluid login-conatiner">
          <div className="col-md-4">
            <div className="login-form">
                <h2 className="text-center">Search Record</h2>

                Today Date
                <div className="form-group">
                <input
                  readOnly={true}
                  type="text"
                  value={today}
                  className="form-control"
                  placeholder="Date"
                />
                </div>

                EHRNumber
                <div className="form-group">
                <input
                  type="text"
                  value={EHRNumber}
                  onChange={(e) => {setEHRNumber(e.target.value)}}
                  className="form-control"
                  placeholder="EHRNumber"
                />
                </div>

                <div className="form-group">
               <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{backgroundColor:"#15324B"}}
                onClick={SearchInformation}
                >
                Search
               </button>
               </div>
        <br></br>
                <div>
                <Section title="User Information ">
                <div className="form-group">
                <input
                  type="text"
                  value={Username}
                  onChange={(e) => {setUsername(e.target.value)}}
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={Userbirth}
                  onChange={(e) => {setUserbirth(e.target.value)}}
                  className="form-control"
                  placeholder="Userbirth"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Usergender}
                  onChange={(e) => {setUsergender(e.target.value)}}
                  className="form-control"
                  placeholder="Usergender"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Userphone}
                  onChange={(e) => {setUserphone(e.target.value)}}
                  className="form-control"
                  placeholder="Userphone"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Userlocation}
                  onChange={(e) => {setUserlocation(e.target.value)}}
                  className="form-control"
                  placeholder="Userlocation"
                />
              </div>
             </Section>
            <br></br>
            <Section title="Disability aids">
               <div className="form-group">
                <input
                  type="text"
                  value={Dtype}
                  onChange={(e) => {setDtype(e.target.value)}}
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={Ddate}
                  onChange={(e) => {setDdate(e.target.value)}}
                  className="form-control"
                  placeholder="Start date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Dreview}
                  onChange={(e) => {setDreview(e.target.value)}}
                  className="form-control"
                  placeholder="Review"
                />
              </div>
              </Section>
            <br></br>
            <Section title="Nutritional supplements" >
              <div className="form-group">
                <input
                  type="text"
                  value={Ntype}
                  onChange={(e) => {setNtype(e.target.value)}}
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={Ndate}
                  onChange={(e) => {setNdate(e.target.value)}}
                  className="form-control"
                  placeholder="Start date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Nreview}
                  onChange={(e) => {setNreview(e.target.value)}}
                  className="form-control"
                  placeholder="Review"
                />
              </div>
              </Section>
              <br></br>
              <Section title="Non-surgical cosmetic treatment" >
              <div className="form-group">
                <input
                  type="text"
                  value={Nstype}
                  onChange={(e) => {setNstype(e.target.value)}}
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={Nsdate}
                  onChange={(e) => {setNsdate(e.target.value)}}
                  className="form-control"
                  placeholder=" date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Nslocation}
                  onChange={(e) => {setNslocation(e.target.value)}}
                  className="form-control"
                  placeholder="Location"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Nsdoctor}
                  onChange={(e) => {setNsdoctor(e.target.value)}}
                  className="form-control"
                  placeholder="Doctor"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Nsreview}
                  onChange={(e) => {setNsreview(e.target.value)}}
                  className="form-control"
                  placeholder="Review"
                />
              </div>
              </Section>
              <br></br>
              <Section title="Vision correction surgery" >
              <div className="form-group">
                <input
                  type="text"
                  value={Vstype}
                  onChange={(e) => {setVstype(e.target.value)}}
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={Vsdate}
                  onChange={(e) => {setVsdate(e.target.value)}}
                  className="form-control"
                  placeholder=" date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Vslocation}
                  onChange={(e) => {setVslocation(e.target.value)}}
                  className="form-control"
                  placeholder="Location"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Vsdoctor}
                  onChange={(e) => {setVsdoctor(e.target.value)}}
                  className="form-control"
                  placeholder="Doctor"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Vsreview}
                  onChange={(e) => {setVsreview(e.target.value)}}
                  className="form-control"
                  placeholder="Review"
                />
              </div>
              </Section>
              <br></br>
              <Section title="Hair problems" >
              <div className="form-group">
                <input
                  type="text"
                  value={Htype}
                  onChange={(e) => {setHtype(e.target.value)}}
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Hsolution}
                  onChange={(e) => {setHsolution(e.target.value)}}
                  className="form-control"
                  placeholder="Solution"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={Hdate}
                  onChange={(e) => {setHdate(e.target.value)}}
                  className="form-control"
                  placeholder="Start date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Hreview}
                  onChange={(e) => {setHreview(e.target.value)}}
                  className="form-control"
                  placeholder="Review"
                />
              </div>
              </Section>
              <br></br>
              <Section title="Vaccine" >
              <div className="form-group">
                <input
                  type="text"
                  value={Vtype}
                  onChange={(e) => {setVtype(e.target.value)}}
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={Vdate}
                  onChange={(e) => {setVdate(e.target.value)}}
                  className="form-control"
                  placeholder=" date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Vlocation}
                  onChange={(e) => {setVlocation(e.target.value)}}
                  className="form-control"
                  placeholder="Location"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Vreview}
                  onChange={(e) => {setVreview(e.target.value)}}
                  className="form-control"
                  placeholder="Review"
                />
              </div>
              </Section>
              <br></br>
              <Section title="Physical therapy / rehabilitation" >
              <div className="form-group">
                <input
                  type="text"
                  value={Ptype}
                  onChange={(e) => {setPtype(e.target.value)}}
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={Pdate}
                  onChange={(e) => {setPdate(e.target.value)}}
                  className="form-control"
                  placeholder="Start date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Plocation}
                  onChange={(e) => {setPlocation(e.target.value)}}
                  className="form-control"
                  placeholder="Location"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Preview}
                  onChange={(e) => {setPreview(e.target.value)}}
                  className="form-control"
                  placeholder="Review"
                />
              </div>
             </Section>
            </div>
            <br></br>
            </div>
            </div>
            
        <div className="col-md-6 col-md-offset-2">
          <div className="c-list">
            <h2 className="text-center">Show Record </h2>
            <table className="table table-bordered table-striped" style={{width:"1200px"}}>
              <thead>
                <tr>
                  <th>Today Date</th>
                  <th>EHRnumber</th>
                  <th>User Name</th>
                  <th>User Birth</th>
                  <th>User Gender</th>
                  <th>User Phone</th>
                  <th>User Location</th>
                  <th>Disability aids Type</th>
                  <th>Disability aids Start Date</th>
                  <th>Disability aids Review</th>
                </tr>
                </thead>

                  <thead>
                  <tr>
                  <td>{today}</td>
                  <td>{EHRNumber}</td>
                  <td>{Username}</td>
                  <td>{Userbirth}</td>
                  <td>{Usergender}</td>
                  <td>{Userphone}</td>
                  <td>{Userlocation}</td>
                  <td>{Dtype}</td>
                  <td>{Ddate}</td>
                  <td>{Dreview}</td>
                  </tr>
                  </thead>
              
            </table>


            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Nutritional supplements Type</th>
                  <th>Nutritional supplements Dosing Start Date</th>
                  <th>Nutritional supplements Review</th>
                  <th>Non-surgical cosmetic treatment Type</th>
                  <th>Non-surgical cosmetic treatment Date</th>
                  <th>Non-surgical cosmetic treatment Location</th>
                  <th>Non-surgical cosmetic treatment Doctor</th>
                  <th>Non-surgical cosmetic treatment Review</th>
                  
                </tr>
                </thead>

                <thead>
                <tr>
                <td>{Nstype}</td>
                <td>{Nsdate}</td>
                <td>{Nslocation}</td>
                <td>{Nsdoctor}</td>
                <td>{Nsreview}</td>
                <td>{Ntype}</td>
                <td>{Ndate}</td>
                <td>{Nreview}</td>
                
                </tr>
                </thead>
            </table>

            <table className="table table-bordered table-striped">
            <thead>
                <tr>
                  <th>Vision correction surgery Type</th>
                  <th>Vision correction surgery Date</th>
                  <th>Vision correction surgery Location</th>
                  <th>Vision correction surgery Doctor</th>
                  <th>Vision correction surgery Review</th>
                  <th>Hair problems Type</th>
                  <th>Hair problems Solution</th>
                  <th>Hair problems Period</th>
                  <th>Hair problems Review</th>
                </tr>
                </thead>

            <thead>
                <tr>
                <td>{Vstype}</td>
                <td>{Vsdate}</td>
                <td>{Vslocation}</td>
                <td>{Vsdoctor}</td>
                <td>{Vsreview}</td>
                <td>{Htype}</td>
                <td>{Hsolution}</td>
                <td>{Hdate}</td>
                <td>{Hreview}</td>
                </tr>
                </thead>
      
            </table>

            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Vaccine Type</th>
                  <th>Vaccine Date</th>
                  <th>Vaccine Location</th>
                  <th>Vaccine Review</th>
                  <th>Physical therapy / rehabilitation Type</th>
                  <th>Physical therapy / rehabilitation Date</th>
                  <th>Physical therapy / rehabilitation Location</th>
                  <th>Physical therapy / rehabilitation Review</th>
                </tr>
                </thead>

                <thead>
                <tr>
                <td>{Vtype}</td>
                <td>{Vdate}</td>
                <td>{Vlocation}</td>
                <td>{Vreview}</td>
                <td>{Ptype}</td>
                <td>{Pdate}</td>
                <td>{Plocation}</td>
                <td>{Preview}</td>
                </tr>
                </thead>
            </table>
          <div className="container container-fluid login-conatiner">
           <div className="col-md-4">
            <div className="login-form" >
            <div className="form-group" style={{display:"flex"}}>
                <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{backgroundColor:"#15324B"}}
                onClick={UpdateInformation}
                >
                Update
               </button>
               <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{backgroundColor:"#15324B"}}
                onClick={DeleteInformation}
                >
                Delete
               </button>
             </div>
             </div>
             </div>
             </div>
            
            </div>
             
        </div>
      </div>

  )
}
  
export default Search;