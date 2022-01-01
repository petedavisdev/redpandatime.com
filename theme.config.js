const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <form
        style={{ display: 'block', marginTop: '8rem', textAlign: 'center' }}
        action="https://tinyletter.com/redpandatime"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://tinyletter.com/redpandatime', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
      >
        <p>
          <label for="tlemail">
            Get an email when it's red panda time (about once a week)
          </label>
        </p>
        <input
          style={{ width: '20em', maxWidth: '100%', paddingInline: '1em' }}
          type="email"
          name="email"
          id="tlemail"
          required
        />
        <input type="hidden" value="1" name="embed" />
        <input
          style={{ paddingInline: '1em' }}
          type="submit"
          value="Subscribe"
        />
      </form>

      <small
        style={{ display: 'block', textAlign: 'center', marginTop: '2rem' }}
      >
        <a href="/feed.xml">RSS</a> |{' '}
        <a href="https://www.pinterest.co.uk/redpandatime/_created">
          Pinterest
        </a>{' '}
        | <a href="https://instagram.com/redpandatime">Instagram</a> |{' '}
        <time>{YEAR}</time> © <a href="https://petedavis.dev">Pete Davis</a>
      </small>
    </footer>
  )
}
