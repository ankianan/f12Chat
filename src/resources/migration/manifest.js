export default {
    1: (state) => ({...state, "even": 2, "nested": {} }),
    2: (state) => ({...state, "even": 4, "nested": { "a": 1 } }),
    3: (state) => ({...state, "even": 8, "nested": undefined }),
}
