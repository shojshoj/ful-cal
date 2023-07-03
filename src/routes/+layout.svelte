<script>
    //Navigation Components
    //Experimenting on Navigation
</script>

<style>
    .application-container{
        font-family: "Roboto";
    }
    .nav-container{
        text-align: right;
        padding: 10px;
        box-shadow: 0px 6px 11px 0px rgba(0,0,0,0.43);
    }
    a, a:visited{
        margin-left: 5px;
        margin-right: 5px;
        color: black;
        text-decoration: none !important;
    }
    a:hover {
        color: grey
    }
</style>

<div class="application-container">
    <div class="nav-container">
        <nav>
            <a href="/">Home</a>
            <a href="calculator">Calculator</a>
        </nav>
    </div>
    <div class="view-container">
        <slot></slot>
    </div>
</div>