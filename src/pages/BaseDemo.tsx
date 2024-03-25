import { SheetComponent } from '@antv/s2-react';
// import { SheetComponent } from '../../src/components';
import { Rect, Image as GImage } from '@antv/g';
import { DataCell, ColCell } from '@antv/s2';
import React from 'react';

class CustomDataCell extends DataCell {
  drawBackgroundShape() {
    const img = new Image();

    img.src = 'http://ceph-rgw.test-r2d2.narwal.com/competitive/first/a20.png';

    img.onload = () => {
      this.backgroundShape = this.appendChild(
        new GImage({
          style: {
            ...this.getBBoxByType(),
            width: 100,
            img,
          },
        }),
      );

      this.drawTextShape();
    };
  }
}

class CustomColCell extends ColCell {
  drawBackgroundShape() {
    const img = new Image();

    img.src = 'http://ceph-rgw.test-r2d2.narwal.com/competitive/first/a20.png';

    img.onload = () => {
      this.backgroundShape = this.appendChild(
        new GImage({
          style: {
            ...this.getBBoxByType(),
            width: 100,
            img,
          },
        }),
      );

      this.drawTextShape();
    };
  }
}

const Demo = () => {
  const dataCfg = {
    fields: {
      rows: ['province', 'city'],
      columns: ['type', 'sub_type'],
      values: ['price'],
    },
    data: [
      {
        price: 1,
        province: '浙江省',
        city: '杭州市',
        type: '家具',
        sub_type: '桌子',
      },
      {
        price: 2,
        province: '浙江省',
        city: '绍兴市',
        type: '家具',
        sub_type: '桌子',
      },
      {
        price: 3,
        province: '浙江省',
        city: '杭州市',
        type: '家具',
        sub_type: '沙发',
      },
      {
        price: 4,
        province: '浙江省',
        city: '绍兴市',
        type: '家具',
        sub_type: '沙发',
      },
    ],
  };

  const options = {
    width: 600,
    height: 600,
    dataCell: viewMeta => {
      return new CustomDataCell(viewMeta, viewMeta?.spreadsheet);
    },
    colCell: viewMeta => {
      return new CustomColCell(viewMeta, viewMeta?.spreadsheet);
    },
  };

  const onDataCellRender = (cell: DataCell) => {
    console.log('cell', cell, 'actualText', cell?.actualText, 'x', cell?.getMeta().x, 'y', cell?.getMeta().y);
    cell?.appendChild(
      new Rect({
        style: {
          x: cell?.getMeta().x,
          y: cell?.getMeta().y,
          width: 20,
          height: 20,
          fill: '#396',
          fillOpacity: 0.8,
          stroke: '#ddd',
          strokeOpacity: 0.8,
          lineWidth: 4,
          radius: 10,
          zIndex: 999,
        },
      }) as any,
    );
  };

  const onColCellRender = (cell: DataCell) => {
    // console.log('cell', cell, 'actualText', cell?.actualText);
    cell?.appendChild(
      new Rect({
        style: {
          x: cell?.getMeta().x,
          y: cell?.getMeta().y,
          width: 20,
          height: 20,
          fill: '#396',
          fillOpacity: 0.8,
          stroke: '#ddd',
          strokeOpacity: 0.8,
          lineWidth: 4,
          radius: 10,
          zIndex: 999,
        },
      }) as any,
    );
  };

  return (
    <SheetComponent
      dataCfg={dataCfg}
      options={options}
      sheetType="pivot"
      onDataCellRender={onDataCellRender}
      onColCellRender={onColCellRender}
    />
  );
};

export default Demo;
