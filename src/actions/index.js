import io from 'socket.io-client';
import config from '../config';
const socket = io( config.processUrl );

export const init = (store) => {
  config.messageTypes.map(mType=>{
     socket.on( mType, (payload) => 
       store.dispatch({ type:mType, payload }) 
     );
  })
}
export const emit = ( type, payload ) => socket.emit( type, payload );