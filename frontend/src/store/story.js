import { create } from "zustand"


export const useStoryStore = create((set) => ({
    stories: [],
    setStories: (stories) => set({ stories }),

    createStory: async(newStory) => {
        if (!newStory.consultant || !newStory.title || !newStory.entry) {
            return {success:false, message: "Please fill in all fields."}
        }
        const res = await fetch("/api/stories", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newStory)
        })
        const data = await res.json()
        set((state) => ({stories:[...state.stories, data.data]}))
        return {success:true, message:"Story created successfully."}
    },


    getStories: async () => {
        const res = await fetch("/api/stories")
        const data = await res.json()
        set({ stories: data.data })

    },


    // updateStory: async (pid, updatedStory) => {
    //     const res = await fetch(`/api/stories/${pid}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-type": "application/json",
    //         },
    //         body: JSON.stringify(updatedStory)
    //     })
    //     const data = await res.json()

    //     if (!data.success) return { success: false, message: data.message } 

    //     // Updates the UI immediately, without freshing the page
    //     set(state => ({
    //         stories: state.stories.map(story => story._id === pid ? data.data : story)
    //     }))
    // },



    // deleteStory: async (pid) => {
    //     const res = await fetch(`/api/stories/${pid}`, {
    //         method: "DELETE"
    //     })
    //     const data = await res.json()
    //     if (!data.success) return { success: false, message: data.message }

           // Updates the UI immediately, without freshing the page
    //     set(state => ({ stories: state.stories.filter(story => story._id !== pid) }))
    //     return { success: true, message: data.message }
    // },
}))