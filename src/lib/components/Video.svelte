<script>
const { title, path } = $props();
</script>

<video
    class="w-full mx-0 my-auto rounded-sm border border-gray-800 overflow-hidden shadow-sm bg-linear-150 from-gray-800 to-gray-900 from-15% to-100%"
    id={title}
    autoplay
    muted
    loop
>
    <source src={path} type="video/webm">
</video>

