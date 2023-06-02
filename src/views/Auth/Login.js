import { Link } from 'react-router-dom';
const App = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="text" placeholder="password" class="input input-bordered" />
            <label class="label">
              <a href="/register" class="label-text-alt link link-hover">Register</a>
              <a href="/forgot-password" class="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <Link to="/mainmenu" class="btn btn-secondary">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
