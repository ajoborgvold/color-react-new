import { useEffect } from "react";

function useClickOutside(ref, handler) {
    useEffect(() => {
        let startedInside = false
        let startedWhenMounted = false

        function listener(e) {
            if (startedInside || !startedWhenMounted) return
            if (!ref.current || ref.current.contains(e.target)) return

            handler(e)
        }

        function validateEventStart(e) {
            startedWhenMounted = ref.current
            startedInside = ref.current && ref.current.contains(e.target)
        }

        document.addEventListener("mousedown", validateEventStart)
        document.addEventListener("touchstart", validateEventStart)
        document.addEventListener("click", listener)

        return () => {
            document.removeEventListener("mousedown", validateEventStart)
            document.removeEventListener("touchstart", validateEventStart)
            document.removeEventListener("click", listener)
        }
    }, [ref, handler])
}

export default useClickOutside