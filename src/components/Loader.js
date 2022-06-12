import React from "react";

export const Loader = () => {
    return(
        <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center">
            <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
       
    )
}