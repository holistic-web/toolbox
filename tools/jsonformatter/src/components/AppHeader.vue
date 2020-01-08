<template>
  <div class="AppHeader">
    <div>
        <b-navbar type="dark" variant="dark">
            <!-- left partition -->
            <b-navbar-nav>
                <b-nav-item href="#">JSONFormatter</b-nav-item>
                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown text="" right>
                    <b-dropdown-item href="#">Other Service</b-dropdown-item>
                    <b-dropdown-item href="#">Other Service</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            <!-- right partition-->
            <b-navbar-nav class="ml-auto">
                <img alt="Vue logo" src="../assets/logo.png">
            </b-navbar-nav>
        </b-navbar>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AppHeader',
}
</script>