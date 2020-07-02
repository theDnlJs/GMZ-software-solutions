import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice( {
    name: 'auth',
    initialState: {
        data: null,
        error: null,
        loading: false,
        userForm: {},
    },
    reducers: {
        test( state )
        {
            state.loading = true;
        },
    }
} );

export const { test } = authSlice.actions;
export default authSlice.reducer;


export const testAction = () => async dispatch =>
{
    dispatch( test() );
};