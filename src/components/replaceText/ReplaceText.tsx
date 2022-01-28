import React from "react";

interface MyState {
  startValue: string,
  finishValue: string,
  replaceStart: string,
  replaceFinish: string
}

class ReplaceText extends React.Component<{}, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      startValue: '',
      replaceStart: '',
      replaceFinish: '',
      finishValue: ''
    };
  }

  render() {
    const { finishValue } = this.state;
    return (
      <form>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flexDirection: 'column', flexBasis: '50%' }}>
            <label className="form-label">Исходный текст</label>
            <textarea className="form-text-area"
                      placeholder="qwertyuiop"
                      onChange={this.updateStartValue.bind(this)}
                      rows={10}
            />
            <div style={{ margin: 10 }}>
              <label>Что</label>
              <input className="form-input"
                     placeholder="uiop"
                     onChange={this.handleReplaceStart.bind(this)}
                     type="text"
              />
              <br/>
              <label>На что</label>
              <input className="form-input"
                     placeholder="Asdf"
                     onChange={this.handleReplaceFinish.bind(this)}
                     type="text"
              />
            </div>
          </div>
          <div style={{ flexDirection: 'column', flexBasis: '50%' }}>
            <label className="form-label">Результат</label>
            <textarea className="form-text-area"
                      placeholder="qwertyAsdf"
                      value={finishValue}
                      readOnly={true}
                      rows={10}
            />
          </div>
        </div>
        <hr className="gradient-border"/>
        <div>Модуль для замены текста. <i>Ничего лишнего!</i></div>
      </form>
    );
  }

  private async updateStartValue(event: any) {
    await this.setState({
      startValue: event.target.value
    });
    this.replaceText();

  }

  private async handleReplaceStart(event: any) {
    await this.setState({
      replaceStart: event.target.value
    });
    this.replaceText();
  }

  private async handleReplaceFinish(event: any) {
    await this.setState({
      replaceFinish: event.target.value
    });
    this.replaceText();
  }

  private replaceText() {
    const { startValue, replaceStart, replaceFinish } = this.state;
    if (replaceStart) {
      const resultString = startValue.replaceAll(replaceStart, replaceFinish);
      this.setState({
        finishValue: resultString
      })
    } else {
      return;
    }
  }
}

export default ReplaceText;