<template>
    <div>
        <h4>Settings</h4>
        <hr class="my-3">

        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Change Password</h4>
                <form>
                    <div class="form-group my-2">
                        <input type="password" class="form-control" placeholder="Old Password">
                    </div>
                    <div class="form-group my-2">
                        <input type="password" class="form-control" placeholder="New Password">
                    </div>
                    <div class="form-group my-2">
                        <button class="btn float-right btn-dark">Change Password</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Settings'
}
</script>