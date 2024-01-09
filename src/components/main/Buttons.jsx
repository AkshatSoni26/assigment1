import React from "react";
import { next, prev } from "../constants/constant";

function Buttons() {
  return (
    <div className="buttons">
      <div className="prev">
        <div dangerouslySetInnerHTML={{ __html: prev }} />
        <div>Previous</div>
      </div>

      <div>1</div>
      <div style={{display:'flex'}}>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      </div>
<div className="btn-active">10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
      <div>17</div>
      <div>18</div>

      <div className="prev">
        <div>Next</div>
        <div dangerouslySetInnerHTML={{ __html: next }} />
      </div>

    </div>
  );
}

export default Buttons;
