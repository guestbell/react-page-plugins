import * as React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import { Theme } from '@mui/material/styles';
import { UploadImageField } from '../uploadImageField/UploadImageField';
import { Image } from '../../types/image/Image';
import Text from 'guestbell-forms/build/components/text/Text';
import WarningIcon from '@mui/icons-material/Warning';
import Button from 'guestbell-forms/build/components/button/Button';
import { makeStyles } from '@mui/styles';
import { yellow } from '@mui/material/colors';

export interface ImageOrSrcOryState {
  imageId?: number;
  image?: Image;
  src?: string;
  srcSet?: string;
}

export interface ImageOrSrcCustomProps {
  UploadImageField: UploadImageField;
  state: ImageOrSrcOryState;
  onChange: (state: Partial<ImageOrSrcOryState>) => void;
  hideSrcField?: boolean;
  hideSrcSetField?: boolean;
}

const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
  root: {
    position: 'relative',
    paddingRight: '1.5rem',
  },
  switchImageButton: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    position: 'absolute !important' as any,
    right: spacing(-1),
    top: '50%',
    transform: 'translateY(-50%)',
    color: palette.action.active + ' !important',
  },
  warningContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing(2),
    backgroundColor: yellow[300],
    marginBottom: spacing(2),
  },
}));

export type ImageOrSrcProps = ImageOrSrcCustomProps;

enum ImageTabEnum {
  ImageUploadButton = 0,
  ImageSrc = 1,
}

const ImageOrSrc: React.FC<ImageOrSrcProps> = props => {
  const { onChange } = props;
  const classes = useStyles();
  const [imageTab, setImageTab] = React.useState<ImageTabEnum>(
    ImageTabEnum.ImageUploadButton
  );
  return (
    <div className={classes.root}>
      {
        {
          [ImageTabEnum.ImageUploadButton]: (
            <props.UploadImageField
              label="Choose image"
              className="d-flex"
              onChange={(imageId, image) => onChange({ imageId, image })}
              imageId={props.state.imageId}
              existingImage={props.state.image}
              chooseImageButtonProps={{
                className: 'ory-prevent-blur',
              }}
              uploadImageButtonProps={{
                className: 'ory-prevent-blur',
              }}
            />
          ),
          [ImageTabEnum.ImageSrc]: (
            <>
              <div className={classes.warningContainer}>
                <WarningIcon style={{ color: yellow[700] }} />
                <p>
                  Using externally hosted images is unsafe. Consider uploading
                  your content to GusteBell instead.
                </p>
              </div>
              {!props.hideSrcField && (
                <Text
                  label="Url"
                  value={props.state.src}
                  onChange={e => props.onChange({ src: e.target.value })}
                />
              )}
              {!props.hideSrcSetField && (
                <Text
                  tooltip={
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Learn more about srcset
                    </a>
                  }
                  label="Html srcset"
                  value={props.state.srcSet}
                  onChange={e => props.onChange({ srcSet: e.target.value })}
                />
              )}
            </>
          ),
        }[imageTab]
      }
      <Button
        circular={true}
        noShadow={true}
        onClick={e => {
          e.preventDefault();
          setImageTab(
            imageTab === ImageTabEnum.ImageSrc
              ? ImageTabEnum.ImageUploadButton
              : ImageTabEnum.ImageSrc
          );
        }}
        className={classes.switchImageButton}
      >
        {
          {
            [ImageTabEnum.ImageUploadButton]: <CreateIcon />,
            [ImageTabEnum.ImageSrc]: <ImageIcon />,
          }[imageTab]
        }
      </Button>
    </div>
  );
};

export default ImageOrSrc;
