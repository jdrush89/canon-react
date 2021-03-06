import { Component } from 'react';
import { Button, ButtonGroup, ProcessingIndicator }  from 'canon-react';
import { Row } from './Common';

class ButtonGroupSection extends Component {
  render() {
    return (
      <div className="website-content-section">
        <div className="content-section-body">
      
          <Row>
            <p><a href="http://rackerlabs.github.io/canon/ui-components/#button-groups" target="_blank">Button Groups</a> are used to lay out a set of related buttons. Button groups have two different states: normal and submitting</p>
          </Row>

          <Row>
            <div className="span-3">
              <h3>Normal</h3>
              <p>In a normal state the buttons are active and ready for interaction from the user. The <code>ProcessingIndicator</code> is either hidden (by default) or not rendered.</p>
            </div>
            <div className="span-8 offset-1">
              <h4>Example</h4>
              <ButtonGroup>
                <Button canonStyle='primary'>Primary</Button>
                <Button>Secondary</Button>
                <Button canonStyle='link'>Cancel</Button>
                <ProcessingIndicator />
              </ButtonGroup>
              <h4>Source</h4>
              <div className="highlight button-group">
                <pre><code className="html">
                  <span className="nt">&lt;ButtonGroup&gt;</span>
                  <span className="nt">&lt;Button</span> <span className="na">canonStyle=</span><span className="s">"primary"</span><span className="nt">&gt;</span>Primary<span className="nt">&lt;/Button&gt;</span>
                  <span className="nt">&lt;Button</span> <span className="na">canonStyle=</span><span className="s">"secondary"</span><span className="nt">&gt;</span>Secondary<span className="nt">&lt;/Button&gt;</span>
                  <span className="nt">&lt;Button</span> <span className="na">canonStyle=</span><span className="s">"link"</span><span className="nt">&gt;</span>Cancel<span className="nt">&lt;/Button&gt;</span>
                  <span className="nt">&lt;ProcessingIndicator</span> <span className="na">hidden=</span><span className="s">{"{true}"}</span><span className="nt">/&gt;</span>
                  <span className="nt">&lt;/ButtonGroup&gt;</span>
                </code></pre>
              </div>
            </div>
          </Row>

          <Row>
            <div className="span-3">
              <h3>Submitting</h3>
              <p>In a submitting state an action is being processed and the buttons are disabled. The <code>ProcessingIndicator</code> is rendered with a property of <code>hidden: false</code>. Cancel links are also hidden with this pattern.</p>
            </div>
            <div className="span-8 offset-1">
              <h4>Example</h4>
              <ButtonGroup>
                <Button canonStyle='primary' enabled={false}>Primary</Button>
                <Button enabled={false}>Secondary</Button>
                <Button canonStyle='link' enabled={false} hidden={true}>Cancel</Button>
                <ProcessingIndicator hidden={false} />
              </ButtonGroup>
              <h4>Source</h4>
              <div className="highlight">
                <pre><code className="html">
                  <span className="nt">&lt;ButtonGroup&gt;</span>
                  <span className="nt">&lt;Button</span> <span className="na">canonStyle=</span><span className="s">"primary"</span> <span className="na">enabled=</span><span className="s">"{false}"</span><span className="nt">&gt;</span>Primary<span className="nt">&lt;/Button&gt;</span>
                  <span className="nt">&lt;Button</span> <span className="na">canonStyle=</span><span className="s">"secondary"</span> <span className="na">enabled=</span><span className="s">"{false}"</span><span className="nt">&gt;</span>Secondary<span className="nt">&lt;/Button&gt;</span>
                  <span className="nt">&lt;Button</span> <span className="na">canonStyle=</span><span className="s">"link"</span> <span className="na">hidden=</span><span className="s">"{true}"</span><span className="nt">&gt;</span>Cancel<span className="nt">&lt;/Button&gt;</span>
                  <span className="nt">&lt;ProcessingIndicator</span> <span className="na">hidden=</span><span className="s">"{false}"</span><span className="nt">/&gt;</span>
                  <span className="nt">&lt;/ButtonGroup&gt;</span>
                </code></pre>
              </div>
            </div>
          </Row>

        </div>
      </div>
    );
  }
}

export default ButtonGroupSection;
