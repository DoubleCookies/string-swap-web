import React from "react";

interface MyState {
  fileName: string,
  startNumber: number,
  finishNumber: number,
  extension: string,
  finishValue: string
}

class GalleryGenerator extends React.Component<{}, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      fileName: '',
      startNumber: 0,
      finishNumber: 0,
      extension: '',
      finishValue: ''
    };
  }

  render() {
    const { finishValue } = this.state;
    return (
      <form>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flexDirection: 'column', flexBasis: '50%', alignSelf: 'flex-end' }}>
            <div style={{ margin: 10 }}>
              <label>Название</label>
              <input className="form-input"
                     placeholder="fileName"
                     onChange={this.updateName.bind(this)}
                     type="text"
              />
              <br/>
              <label>Старт. номер</label>
              <input className="form-input"
                     placeholder="1"
                     onChange={this.updateStartNumber.bind(this)}
                     type="text"
              />
              <br/>
              <label>Фин. номер</label>
              <input className="form-input"
                     placeholder="3"
                     onChange={this.updateFinishNumber.bind(this)}
                     type="text"

              />
              <br/>
              <label>Расширение</label>
              <input className="form-input"
                     placeholder="jpg"
                     onChange={this.updateExtension.bind(this)}
                     type="text"
              />
            </div>
          </div>
          <div style={{ flexDirection: 'column', flexBasis: '50%' }}>
            <label className="form-label">Результат</label>
            <textarea className="form-text-area"
                      placeholder="fileName 1.jpg&#10;fileName 2.jpg&#10;fileName 3.jpg"
                      value={finishValue}
                      readOnly={true}
                      rows={10}
            />
          </div>
        </div>
      </form>
    );
  }

  private async updateName(event: any) {
    await this.setState({
      fileName: event.target.value
    });
    this.replaceText();
  }

  private async updateStartNumber(event: any) {
    await this.setState({
      startNumber: event.target.value
    });
    this.replaceText();
  }

  private async updateFinishNumber(event: any) {
    await this.setState({
      finishNumber: event.target.value
    });
    this.replaceText();
  }

  private async updateExtension(event: any) {
    await this.setState({
      extension: event.target.value
    });
    this.replaceText();
  }

  private replaceText() {
    const { fileName, startNumber, finishNumber, extension } = this.state;
    if (fileName.length === 0 || !startNumber || !finishNumber || extension.length === 0) {
      return;
    }
    let resultString = '';
    for (let i = startNumber; i < finishNumber; i++) {
      resultString += fileName.trim() + ' ' + i + '.' + extension + '\n';
    }
    this.setState({
      finishValue: resultString
    })
  }
}

export default GalleryGenerator;