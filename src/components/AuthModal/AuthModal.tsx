import { useState } from 'react';
import jetLogo from '../../assets/jet-logo.svg';
import styles from './AuthModal.module.css';

interface AuthModalProps {
  onClose: () => void;
  defaultView?: 'signin' | 'signup';
}

export default function AuthModal({ onClose, defaultView = 'signup' }: AuthModalProps) {
  // ─── STATE ───────────────────────────────────────────────────────────────────
  const [view, setView] = useState<'signin' | 'signup'>(defaultView);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ─── SIGN UP FIELDS ───────────────────────────────────────────────────────────
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // ─── SIGN IN FIELDS ───────────────────────────────────────────────────────────
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [showSignInPassword, setShowSignInPassword] = useState(false);

  // ─── HANDLERS ────────────────────────────────────────────────────────────────
  const handleSignUp = () => {
    // TODO: connect to backend
    console.log({ fullName, email, phone, password, confirmPassword });
  };

  const handleSignIn = () => {
    // TODO: connect to backend
    console.log({ signInEmail, signInPassword });
  };

  // ─── RENDER ──────────────────────────────────────────────────────────────────
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        {/* LOGO */}
        <div className={styles.logoWrapper}>
          <img src={jetLogo} alt="Jet's Pizza" className={styles.logo} />
        </div>

        {/* TITLE */}
        <h2 className={styles.title}>
          {view === 'signup' ? 'SIGN UP' : 'SIGN IN'}
        </h2>

        {/* ── SIGN UP FORM ── */}
        {view === 'signup' && (
          <div className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label}>Full Name</label>
              <input
                type="text"
                placeholder="First and Last Name"
                className={styles.input}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Email Address</label>
              <input
                type="email"
                placeholder="example@mail.com"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Phone Number</label>
              <input
                type="tel"
                placeholder="+1 (000) 000-0000"
                className={styles.input}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Password</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Min. 8 characters"
                  className={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className={styles.eyeBtn}
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Confirm Password</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Re-enter password"
                  className={styles.input}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  className={styles.eyeBtn}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  type="button"
                >
                  {showConfirmPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <button className={styles.submitBtn} onClick={handleSignUp}>Sign Up</button>

            <div className={styles.divider}>
              <span>or</span>
            </div>

            <button className={styles.socialBtn}>
              <span className={styles.socialIcon}>🍎</span> Continue with Apple
            </button>
            <button className={styles.socialBtn}>
              <span className={styles.socialIcon}>G</span> Continue with Google
            </button>

            <p className={styles.toggleText}>
              Already have an account?{' '}
              <span className={styles.toggleLink} onClick={() => setView('signin')}>
                Sign In
              </span>
            </p>

            <p className={styles.terms}>
              By Signing Up you agree to our{' '}
              <a href="/terms" className={styles.termsLink}>Terms of Service</a>
              {' '}and{' '}
              <a href="/privacy" className={styles.termsLink}>Privacy Policy</a>
            </p>
          </div>
        )}

        {/* ── SIGN IN FORM ── */}
        {view === 'signin' && (
          <div className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label}>Email Address</label>
              <input
                type="email"
                placeholder="example@mail.com"
                className={styles.input}
                value={signInEmail}
                onChange={(e) => setSignInEmail(e.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Password</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showSignInPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className={styles.input}
                  value={signInPassword}
                  onChange={(e) => setSignInPassword(e.target.value)}
                />
                <button
                  className={styles.eyeBtn}
                  onClick={() => setShowSignInPassword(!showSignInPassword)}
                  type="button"
                >
                  {showSignInPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <p className={styles.forgotPassword}>
              <a href="/forgot-password" className={styles.termsLink}>Forgot Password?</a>
            </p>

            <button className={styles.submitBtn} onClick={handleSignIn}>Sign In</button>

            <div className={styles.divider}>
              <span>or</span>
            </div>

            <button className={styles.socialBtn}>
              <span className={styles.socialIcon}>🍎</span> Continue with Apple
            </button>
            <button className={styles.socialBtn}>
              <span className={styles.socialIcon}>G</span> Continue with Google
            </button>

            <p className={styles.toggleText}>
              Don't have an account?{' '}
              <span className={styles.toggleLink} onClick={() => setView('signup')}>
                Sign Up
              </span>
            </p>
          </div>
        )}

      </div>
    </div>
  );
}