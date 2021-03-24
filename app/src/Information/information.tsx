import React from 'react';
import {FirebaseDatabaseNode} from '@react-firebase/database';
import {useParams} from 'react-router-dom';
import Adressa from "./adressa"

interface informationParams {
    id: string;
}

const Information = () => {
    const { id } = useParams<informationParams>();
    return (
        <div>
            <FirebaseDatabaseNode
              path={`locations/${id}`}
              
            >
              {d => {
                return (
                  <React.Fragment>
                      <div>
                          {!d.isLoading && d.value && <p>{d.value.desc}</p>}
                      </div>
                  </React.Fragment>
                );
              }}
            </FirebaseDatabaseNode>
            {id === "3" && <Adressa/> }
        </div>
    )
}

export default Information;