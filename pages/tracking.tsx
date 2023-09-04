import BaseLayout from "./component/BaseLayout"
import { AiFillBook } from "react-icons/ai";
import data from '../../shp_test_resp.json'
import Image from "next/image";
export default function About() {
  return (
    <>
      <BaseLayout>
        <div className="tracking-container">
          <div className="header-container">
            <div className="tracking-header">tracking management</div>
            <div className="tracking-header-btn">
              <button className="button-17"> export </button>
              <button className="button-17"> filter </button>
            </div>
          </div>

          <div className="card-container">
            <div className="card" >
              <div>
                ทั้งหมด
                <br />
                30,000 order
              </div>
              <div className="card-icon"  >
                <Image src="/approved.png" width={50} height={50} className="card-icon" alt="logo" />
                
              </div>
            </div>
            <div className="card" >
              <div>
                ทั้งหมด
                <br />
                30,000 order
              </div>
              <div >
                <AiFillBook />
              </div>
            </div>
            <div className="card" >
              <div>
                ทั้งหมด
                <br />
                30,000 order
              </div>
              <div >
                <AiFillBook />
              </div>
            </div>
            <div className="card" >
              <div>
                ทั้งหมด
                <br />
                30,000 order
              </div>
              <div >
                <AiFillBook />
              </div>
            </div>


          </div>
          <div className="table-container">
            <table id="customers">
              <tr>
                <th>#</th>
                <th>refNumber</th>
                <th>Courier</th>
                <th>trackingNumber</th>
                <th>status</th>
                <th>descriptions</th>
              </tr>
              <tr>
                <th >1</th>
                <td>{data[0].refNumber}</td>
                <td>{data[0].courier}</td>
                <td>{data[0].trackingNumber}</td>
                <td >{data[0].status}</td>
                <td >
                  {data[0].detail.timelines[0].date}<br />
                  {data[0].detail.timelines[0].details[0].description}<br />
                  {data[0].detail.timelines[0].details[0].status}<br />
                  {data[0].detail.timelines[0].details[0].time}<br />
                  <button className="btn-dashboard"> details </button>
                </td>
              </tr>
              <tr>
                <th >1</th>
                <td>{data[0].refNumber}</td>
                <td>{data[0].courier}</td>
                <td>{data[0].trackingNumber}</td>
                <td>{data[0].status}</td>
                <td>
                  {data[0].detail.timelines[0].date}<br />
                  {data[0].detail.timelines[0].details[0].description}<br />
                  {data[0].detail.timelines[0].details[0].status}<br />
                  {data[0].detail.timelines[0].details[0].time}<br />
                  <button className="btn-dashboard"> details </button>
                </td>
              </tr>
              <tr>
                <th >1</th>
                <td>{data[0].refNumber}</td>
                <td>{data[0].courier}</td>
                <td>{data[0].trackingNumber}</td>
                <td>{data[0].status}</td>
                <td>
                  {data[0].detail.timelines[0].date}<br />
                  {data[0].detail.timelines[0].details[0].description}<br />
                  {data[0].detail.timelines[0].details[0].status}<br />
                  {data[0].detail.timelines[0].details[0].time}<br />
                  <button className="btn-dashboard"> details </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </BaseLayout>
    </>
  )
}
